import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const recipientEmail = Deno.env.get('CONTACT_FORM_RECIPIENT');
    if (!recipientEmail) {
      throw new Error('CONTACT_FORM_RECIPIENT secret is not configured');
    }

    const { name, email, phone, reason, frequency, availability, injuries, currentWorkouts } = await req.json();

    if (!name || !email || !reason || !frequency || !availability || !injuries || !currentWorkouts) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailBody = `
New Training Application

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

1. Main reason for training:
${reason}

2. How often looking to train:
${frequency}

3. Preferred days/time frames:
${availability}

4. Pain or injuries:
${injuries}

5. Current workouts/sports:
${currentWorkouts}
    `.trim();

    // Store in database for record-keeping
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    const dbResponse = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || null,
        reason,
        frequency,
        availability,
        injuries,
        current_workouts: currentWorkouts,
      }),
    });

    if (!dbResponse.ok) {
      const errText = await dbResponse.text();
      console.error('DB insert failed:', errText);
    }

    console.log(`New contact form submission from ${name} (${email})`);
    console.log(`Recipient: ${recipientEmail}`);
    console.log(emailBody);

    return new Response(
      JSON.stringify({ success: true, message: 'Application submitted successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to process submission' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

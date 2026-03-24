import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Nick Tumminello"

interface ContactFormNotificationProps {
  name?: string
  email?: string
  phone?: string
  reason?: string
  frequency?: string
  availability?: string
  injuries?: string
  currentWorkouts?: string
}

const ContactFormNotificationEmail = ({
  name = 'N/A',
  email = 'N/A',
  phone,
  reason = 'N/A',
  frequency = 'N/A',
  availability = 'N/A',
  injuries = 'N/A',
  currentWorkouts = 'N/A',
}: ContactFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New Training Application from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Training Application</Heading>
        <Text style={text}><strong>Name:</strong> {name}</Text>
        <Text style={text}><strong>Email:</strong> {email}</Text>
        <Text style={text}><strong>Phone:</strong> {phone || 'Not provided'}</Text>
        <Hr style={hr} />
        <Text style={label}>1. Main reason for training:</Text>
        <Text style={answer}>{reason}</Text>
        <Text style={label}>2. How often looking to train:</Text>
        <Text style={answer}>{frequency}</Text>
        <Text style={label}>3. Preferred days/time frames:</Text>
        <Text style={answer}>{availability}</Text>
        <Text style={label}>4. Pain or injuries:</Text>
        <Text style={answer}>{injuries}</Text>
        <Text style={label}>5. Current workouts/sports:</Text>
        <Text style={answer}>{currentWorkouts}</Text>
        <Hr style={hr} />
        <Text style={footer}>This application was submitted via {SITE_NAME}'s website.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) => `New Training Application from ${data.name || 'Unknown'}`,
  displayName: 'Contact form notification',
  to: 'nicktumminello@gmail.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '555-123-4567',
    reason: 'I want to get stronger and improve my tennis game.',
    frequency: '3 times per week',
    availability: 'Monday, Wednesday, Friday mornings',
    injuries: 'Mild lower back pain, no surgery history.',
    currentWorkouts: 'Running 3x/week, occasional yoga.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: "'DM Sans', Arial, sans-serif" }
const container = { padding: '24px 28px', maxWidth: '600px' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: '#0a0a0a', margin: '0 0 24px', fontFamily: "'Bebas Neue', Arial, sans-serif", letterSpacing: '1px' }
const text = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0 0 8px' }
const label = { fontSize: '14px', color: '#0a0a0a', fontWeight: 'bold' as const, margin: '16px 0 4px' }
const answer = { fontSize: '14px', color: '#555555', lineHeight: '1.5', margin: '0 0 8px', paddingLeft: '8px' }
const hr = { borderColor: '#e5e5e5', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '24px 0 0' }

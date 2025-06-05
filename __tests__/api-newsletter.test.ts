// @jest-environment node
import { POST } from '@/app/api/newsletter/route';

describe('POST /api/newsletter', () => {
  it('returns 400 for invalid email', async () => {
    const req = new Request('http://localhost/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'invalid' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
    const data = await res.json();
    expect(data.message).toBe('Email invalide');
  });

  it('returns 200 for valid email', async () => {
    const req = new Request('http://localhost/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'test@example.com' }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.message).toBe('Inscription confirmée');
  });
});

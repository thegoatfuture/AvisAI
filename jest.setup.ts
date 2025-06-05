import '@testing-library/jest-dom';

if (typeof global.fetch === 'undefined') {
  const fetch = require('cross-fetch');
  global.fetch = fetch;
  global.Headers = fetch.Headers;
  global.Request = fetch.Request;
  global.Response = fetch.Response;
}

if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

if (typeof global.Response !== 'undefined' && typeof global.Response.json !== 'function') {
  global.Response.json = (body, init) => new global.Response(JSON.stringify(body), {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
  });
}

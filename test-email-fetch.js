async function test() {
  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: 'service_eox73kx',
        template_id: 'ptp2crc',
        user_id: 'XTyI25B_tOx2wQ0xi',
        template_params: {
          user_name: 'Test',
          user_email: 'test@example.com',
          message: 'Test message'
        }
      })
    });
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Response:', text);
  } catch(e) {
    console.error(e);
  }
}
test();

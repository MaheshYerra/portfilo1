async function createAdmin() {
  try {
    const res = await fetch('http://localhost:5000/api/auth/setup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'admin@ymahesh.com',
        password: 'admin'
      })
    });
    
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.error('Error response:', errorData);
      return;
    }
    
    const data = await res.json();
    console.log('Admin created:', data);
  } catch (error) {
    console.error(error.message);
  }
}

createAdmin();

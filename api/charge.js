export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { token, amount, currency } = req.body

  try {
    const response = await fetch('https://api.tap.company/v2/charges', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.TAP_SECRET_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: amount,
        currency: currency,
        threeDSecure: true,
        save_card: false,
        source: { id: token },
        redirect: { url: 'https://fsy-booking-test.vercel.app' }
      })
    })

    const data = await response.json()
    res.status(200).json(data)

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FSY Booking Test</title>
  </head>
  <body style="font-family: sans-serif; text-align: center; padding: 40px;">
    <h1>🧘 Free Spirit Yoga</h1>
    <p>Class booking test — 1 SAR</p>
    <p id="status">Loading payment form...</p>
    <div id="element-container" style="margin: 20px auto; max-width: 400px; text-align: left;"></div>
    <div id="error-handler" style="color:red;"></div>
    <br>
    <button id="pay-btn" onclick="pay()" style="padding: 10px 30px; font-size: 16px; background: #000; color: #fff; border: none; border-radius: 8px; cursor: pointer; display:none;">
      Pay 1 SAR
    </button>

    <script src="https://secure.gosell.io/js/sdk/tap.min.js"></script>
    <script>
      window.onload = function() {
        var tap = Tapjsli('pk_live_eyRZAXs8pKWbjzqOFSVHQPiJ')
        var elements = tap.elements({})
        var style = {
          base: {
            color: '#535353',
            lineHeight: '18px',
            fontFamily: 'sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': { color: 'rgba(0, 0, 0, 0.26)', fontSize: '15px' }
          },
          invalid: { color: 'red' }
        }
        var paymentOptions = {
          currencyCode: ['SAR'],
          labels: { cardNumber: 'Card Number', expirationDate: 'MM/YY', cvv: 'CVV', cardHolder: 'Card Holder Name' },
          TextDirection: 'ltr',
          paymentAllowed: ['VISA', 'MASTERCARD', 'MADA']
        }
        var card = elements.create('card', { style: style }, paymentOptions)
        card.mount('#element-container')
        card.addEventListener('change', function(event) {
          document.getElementById('error-handler').textContent = event.error ? event.error.message : ''
        })
        card.addEventListener('ready', function() {
          document.getElementById('status').textContent = 'Enter your card details below'
          document.getElementById('pay-btn').style.display = 'inline-block'
        })

        var paid = false

        window.pay = function() {
          if (paid) return
          paid = true
          document.getElementById('pay-btn').disabled = true
          document.getElementById('status').textContent = 'Processing...'
          tap.createToken(card).then(function(result) {
            if (result.error) {
              document.getElementById('status').textContent = 'Error: ' + result.error.message
              paid = false
              document.getElementById('pay-btn').disabled = false
              return
            }
            fetch('/api/charge', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ token: result.id, amount: 1, currency: 'SAR' })
            })
            .then(function(res) { return res.json() })
            .then(function(charge) {
              console.log('Charge response:', charge)
              if (charge.status === 'CAPTURED') {
                document.getElementById('status').textContent = '✅ Payment successful! Charge ID: ' + charge.id
              } else if (charge.transaction && charge.transaction.url) {
                document.getElementById('status').textContent = 'Redirecting to bank for verification...'
                setTimeout(function() {
                  window.location.href = charge.transaction.url
                }, 1000)
              } else if (charge.errors) {
                document.getElementById('status').textContent = 'Error: ' + charge.errors[0].description
                paid = false
                document.getElementById('pay-btn').disabled = false
              } else {
                document.getElementById('status').textContent = 'Status: ' + charge.status
              }
            })
            .catch(function(err) {
              document.getElementById('status').textContent = 'Error: ' + err.message
              paid = false
              document.getElementById('pay-btn').disabled = false
            })
          })
        }
      }
    </script>
  </body>
</html>

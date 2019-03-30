function parseTokenString(tokenString) {
  const [amountString, symbol] = tokenString.split(" ")
  const amount = parseFloat(amountString)
  return { amount, symbol }
}

async function updaters (state, payload, blockInfo, context) {
  const Post = state.post
  const { amount, symbol } = parseTokenString(payload.data.quantity)
  try {
    let post = await new Post(
      {
        amount: amount,
        symbol: symbol
      }
    )
    await post.save()
  } catch (err) {
    console.error(err)
  }
}

export default updaters
const chefWhatsapp = "573046356202";

exports.handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      headers: { Allow: "GET" },
      body: JSON.stringify({ ok: false, error: "Method not allowed" })
    };
  }

  const query = event.queryStringParameters || {};
  const waText = encodeURIComponent(
    [
      "Hola chef,",
      "",
      "Pedido confirmado.",
      "",
      "Detalle del pedido:",
      `Pedido: ${query.dish || "Pedido sin nombre"}`,
      `Precio: ${query.price || "Por confirmar"}`,
      `Categoría: ${query.category || "Sin categoría"}`,
      `Punto de cocción: ${query.cooking || "No informado"}`,
      `Temperatura de servicio: ${query.temperature || "No informada"}`,
      "",
      "Gracias."
    ].join("\n")
  );

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      ok: true,
      whatsappUrl: `https://wa.me/${chefWhatsapp}?text=${waText}`
    })
  };
};

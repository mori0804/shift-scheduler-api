// api/shift.js
export default async function handler(req, res) {
  // ✅ CORS（クロスオリジン）対応ヘッダーを追加
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ ブラウザの事前リクエスト（OPTIONS）に対応
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "POST") {
    try {
      // Bodyの読み取りを保証
      let body = {};
      if (req.body) {
        body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      }

      // 正常レスポンス
      res.status(200).json({
        message: "シフト受け取り成功！",
        received: body,
      });
    } catch (err) {
      res.status(500).json({ error: "サーバーエラー", detail: err.message });
    }
  } else if (req.method === "GET") {
    res.status(200).json({ message: "このエンドポイントはPOST専用です" });
  } else {
    res.status(405).json({ error: "許可されていないメソッドです" });
  }
}

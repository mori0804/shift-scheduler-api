// api/shift.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Bodyの読み取りを保証
      let body = {};
      if (req.body) {
        body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      }

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

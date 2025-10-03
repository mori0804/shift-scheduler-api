// api/shift.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body || {}; // 空でもOKにしておく

      res.status(200).json({
        message: "シフト受け取り成功！",
        received: data,
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

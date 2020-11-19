import {NextApiHandler} from "next";

const handler : NextApiHandler = (_req, res) => {
    if (_req.method !== 'GET')
        return res.status(403).json({status: 403, message: "only support GET method"});

    const p = _req.headers.authorization?.split(" ")
    if (p && p.length >= 2) {
        const token = p[1];
        res.status(200).json({status: 200, token: token});
        return
    }

    res.status(401).json({ status: 401, message: "bạn cần đăng nhập để tiếp tục" })
}

export default handler;
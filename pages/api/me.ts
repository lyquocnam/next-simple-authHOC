import {NextApiHandler} from "next";

const handler : NextApiHandler = (_req, res) => {
    if (_req.method !== 'POST')
        return res.status(403).json({status: 403, message: "only support POST method"});
    if (_req.body.name === 'Bob') {
        res.status(200).json({
            id: 2,
            name: "Bob"
        })
        return
    }

    res.status(401).json({ status: 401, message: "bạn cần đăng nhập để tiếp tục" })
}

export default handler;
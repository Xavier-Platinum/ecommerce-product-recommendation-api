import { findUserById } from "../../services";

export default async(req, res, next) => {
    try {
        const userExists = await findUserById(re)
    } catch (error) {
        console.error(`Error logining in user ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
            data: null
        })
    }
};

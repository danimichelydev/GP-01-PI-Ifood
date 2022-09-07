import crypto from "node:crypto"

export default class HashPassword {
    constructor() {}

    static hash(senha) {
        const hashedPassword = crypto.
        pbkdf2Sync(senha, process.env.PASSWORD_SALT , 10000, 64, "sha512").
        toString("hex");

        return hashedPassword;
    }

    static validate(senha, hash) {
        const hashedPassword = HashPassword.hash(senha);

        return hashedPassword === hash
    }
}
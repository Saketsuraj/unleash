export interface IPat {
    secret: string;
    userId: number;
    expiresAt?: Date;
    createdAt?: Date;
    seenAt?: Date;
}

export default class Pat implements IPat {
    secret: string;

    userId: number;

    expiresAt: Date;

    seenAt: Date;

    createdAt: Date;

    constructor({ secret, userId, expiresAt, seenAt, createdAt }: IPat) {
        this.secret = secret;
        this.userId = userId;
        this.expiresAt = expiresAt;
        this.seenAt = seenAt;
        this.createdAt = createdAt;
    }
}

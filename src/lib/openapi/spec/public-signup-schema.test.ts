import { validateSchema } from '../validate';
import { PublicSignupTokenSchema } from './public-signup-token-schema';

test('publicSignupTokenSchema', () => {
    const data: PublicSignupTokenSchema = {
        name: 'Default',
        secret: 'some-secret',
        expiresAt: new Date().toISOString(),
        users: [],
        role: { name: 'Viewer ', type: 'type', id: 1 },
        createdAt: new Date().toISOString(),
        createdBy: 'someone',
    };

    expect(
        validateSchema('#/components/schemas/publicSignupTokenSchema', {}),
    ).not.toBeUndefined();

    expect(
        validateSchema('#/components/schemas/publicSignupTokenSchema', data),
    ).toBeUndefined();
});

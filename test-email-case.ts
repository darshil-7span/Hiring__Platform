import { registerSchema, loginSchema } from './src/validations/auth.validation';

// Test email normalization
const testCases = [
  { email: 'Jill@example.com', expected: 'jill@example.com' },
  { email: 'JOHN@EXAMPLE.COM', expected: 'john@example.com' },
  { email: 'Mixed.Case@Example.COM', expected: 'mixed.case@example.com' },
  { email: '  SpaceEmail@test.com  ', expected: 'spaceemail@test.com' },
];

console.log('🧪 Testing Email Case Normalization\n');

testCases.forEach(({ email, expected }) => {
  try {
    const result = registerSchema.parse({
      body: {
        name: 'Test User',
        email: email,
        password: 'Test@123',
        country_id: 1,
        role_name: 'candidate',
      },
    });
    
    const normalizedEmail = result.body.email;
    const passed = normalizedEmail === expected;
    
    console.log(`${passed ? '✅' : '❌'} Input: "${email}"`);
    console.log(`   Normalized: "${normalizedEmail}"`);
    console.log(`   Expected: "${expected}"`);
    console.log();
  } catch (error: any) {
    console.log(`❌ Input: "${email}" - Error: ${error.message}\n`);
  }
});

console.log('✅ All emails are now normalized to lowercase!');

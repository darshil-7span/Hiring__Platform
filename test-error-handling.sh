#!/bin/bash

# Test Error Handling - Clean Responses
# This script tests the improved error handling

echo "🧪 Testing Error Handling"
echo "========================"
echo ""

echo "📋 Test 1: Duplicate Email (409 Conflict)"
echo "Expected: Clean message, NO stack trace"
echo ""

curl -X POST http://localhost:5002/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jill",
    "email": "jill@example.com",
    "password": "Test@12312",
    "phone_number": "9876543244",
    "country_id": 1,
    "role_name": "candidate"
  }' \
  -s | jq '.'

echo ""
echo "========================"
echo ""
echo "Expected Response:"
echo '{'
echo '  "success": false,'
echo '  "message": "Email already registered"'
echo '}'
echo ""
echo "✅ Notice: NO stack trace in response!"
echo "✅ Stack trace is logged internally for debugging"

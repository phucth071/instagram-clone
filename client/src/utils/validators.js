export const validators = {
  username: {
    required: 'Username is required',
    minLength: { value: 3, message: 'Minimum length should be 3' },
    maxLength: { value: 20, message: 'Minimum length should be 20' },
    pattern: {
      value: /^[A-Za-z0-9_]+$/, message: 'Username can only contain letters and numbers'
    }
  },
  name: {
    required: 'Name is required'
  },
  password: {
    required: 'Password is required',
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!])[A-Za-z\d@!]{8,}$/, message: 'Password must contain at least 8 characters, including letter, number, and special character (@!)'
    },
    minLength: { value: 8, message: 'Minimum length should be 8' },
    maxLength: { value: 50, message: 'Minimum length should be 50' }
  }
}

module.exports = {
  rules: {
    'avoid-call-value': 'error',
    'avoid-low-level-calls': 'error',
    'avoid-sha3': 'error',
    'avoid-suicide': 'error',
    'avoid-throw': 'error',
    'avoid-tx-origin': 'error',
    'check-send-result': 'error',
    // Require latest version supported by HardHat.
    'compiler-version': ['error', '^0.8.16'],
    'func-visibility': ['error', {'ignoreconstructors': true }],
    'mark-callable-contracts': 'error',
    'multiple-sends': 'error',
    'mark-callable-contracts': 'error',
    'multiple-sends': 'error',
    'no-complex-fallback': 'error',
    'no-inline-assembly': 'error',
    'not-rely-on-block-hash': 'error',
    'not-rely-on-time': 'error',
    'reentrancy': 'error',
    'state-visibility': 'error',
  }
}

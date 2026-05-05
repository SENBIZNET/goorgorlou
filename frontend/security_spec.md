# Security Specification for Fomi Caba

## Data Invariants
1. A subscriber can only have one active subscription if the previous one is fully paid (`remainingDebt == 0`).
2. Payments must only be recorded as Mobile Money or Card. Cash is strictly forbidden.
3. Users can only read their own profile and subscriptions, unless they are Admin or Boutique (for their linked subscribers).
4. Only Admin/Superviseur can create shops or modify global pricing.

## Dirty Dozen Payloads (Rejection Targets)
1. **Identity Spoofing**: Attempt to create a subscription with another user's `subscriberId`.
2. **Role Escalation**: Anonymous user trying to write to the `users` collection with `role: 'ADMIN'`.
3. **Ghost Field**: Adding a `bonusPoints` field to a payment document that isn't in the schema.
4. **Debt Bypass**: Creating a new subscription while `remainingDebt` > 0 in the previous one. (Handled via logic check).
5. **Cash Injection**: Adding a payment with `paymentMethod: 'CASH'`.
6. **ID Poisoning**: Using a 2KB string as a shop ID.
7. **Negative Payment**: Submitting a payment with a negative `amount`.
8. **Owner Mutation**: Trying to change the `subscriberId` of an existing subscription.
9. **Blanket Read**: Authenticated user trying to `list` all `users` without a filter.
10. **State Shortcut**: Subscriber trying to set their own `isDebtCleared` to `true`.
11. **PII Leak**: Accessing another user's private info (email/phone) without authorization.
12. **Future Timestamp**: Submitting a payment with a `timestamp` in the year 2099.

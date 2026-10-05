# Database Schema

## User

- name
- email
- password
- phone
- role
- city
- locality
- pincode
- bloodGroup
- isDonorAvailable
- isVerifiedDonor
- tokenBalance
- communityTier
- verifiedDonationCount
- isActive
- createdAt
- updatedAt

## BloodRequest

- createdByUserId
- patientName
- requestFor
- relationToPatient
- bloodGroup
- component
- unitsRequired
- urgency
- hospitalName
- hospitalAddress
- city
- pincode
- requiredBefore
- contactNumber
- supportingDocumentUrl
- status
- verifiedBy
- createdAt
- updatedAt

## DonorResponse

- requestId
- donorId
- responseStatus
- message
- contactShared
- createdAt
- updatedAt

## DonationRecord

- donorId
- bloodBankId
- bloodBankName
- donationDate
- verificationStatus
- verifiedBy
- certificateUrl
- tokensAwarded
- createdAt
- updatedAt

## TokenTransaction

- userId
- type
- tokens
- status
- description
- verifiedBy
- referenceId
- createdAt

## BloodBank

- name
- licenseNumber
- phone
- email
- address
- city
- pincode
- latitude
- longitude
- isPartner
- isVerified
- availableServices
- operatingHours
- isActive
- createdAt
- updatedAt

## RemoteDonationAssignment

- requestId
- donorId
- bloodBankId
- donorDistanceKm
- recipientHospitalDistanceKm
- status
- donorAcceptedAt
- appointmentDate
- donationCompletedAt
- donationVerified
- donationVerifiedAt
- transferCoordinationStatus
- createdAt
- updatedAt
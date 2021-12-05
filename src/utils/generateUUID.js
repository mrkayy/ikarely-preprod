export const genUUID = () => {
  const uuid = `KA-${Math.random().toString().substring(2, 6)}-C${Math.random()
    .toString()
    .substring(4, 6)}`;
  return uuid;
};

export const getServiceReqUUID = () => {
  const uuid = `KA-${Math.random().toString().substring(2, 6)}-SA${Math.random()
    .toString()
    .substring(4, 6)}`;
  return uuid;
};

export const getInquiryReqUUID = () => {
  const uuid = `KA-${Math.random().toString().substring(2, 6)}-IN${Math.random()
    .toString()
    .substring(4, 6)}`;
  return uuid;
};

export const getPaymentReqUUID = () => {
  const uuid = `KA-${Math.random().toString().substring(2, 6)}-PA${Math.random()
    .toString()
    .substring(4, 6)}`;
  return uuid;
};
export const getSubscriptionReqUUID = () => {
  const uuid = `KA-${Math.random().toString().substring(2, 6)}-SU${Math.random()
    .toString()
    .substring(4, 6)}`;
  return uuid;
};

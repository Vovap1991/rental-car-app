import { ContactPhoneLink } from './ContactPhone.styled';

export const ContactPhone = () => {
  const phoneNumber = '+380730000000';

  return (
    <div>
      <ContactPhoneLink href={`tel: ${phoneNumber}`}>
        {phoneNumber}
      </ContactPhoneLink>
    </div>
  );
};

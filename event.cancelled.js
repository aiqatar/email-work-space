const dynamicTemplateData = {
    url: isOnline
        ? emailData.meetingLink
        : `https://www.google.com/maps/search/?api=1&query=${emailData.lat},${emailData.lng}`,
    greeting:
        emailData.userLanguage === 'en'
            ? `Dear ${userFirstName},`
            : `عزيزي ${userFirstName}،`,
    content1:
        emailData.userLanguage === 'en'
            ? `Sorry to inform you that event got Cancelled`
            : `نأسف لإبلاغك أنه تم تعديل اسم `,
    content2:
        emailData.userLanguage === 'en'
            ? `Event Name : ${emailData.eventName}`
            : `اسم الحدث : ${emailData.eventNameAr}`,
    content3:
        emailData.userLanguage == 'en'
            ? `Date : ${emailData.eventDate}`
            : `التاريخ: ${emailData.eventDate}`,

    subject:
        emailData.userLanguage === 'en'
            ? 'Event Cancelled'
            : 'تعديل الحدث'
};
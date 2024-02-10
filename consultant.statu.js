// these are the email sent to the consultantwhen the status of the consultant will change

// when consultant request get approved
  const dynamicTemplateData = {
    url: `https://fozdeal.com/consultant-profile/${emailData.consultant_id}`,
    greeting:
        emailData.language === 'en'
            ? `Dear ${first_name},`
            : `عزيزي ${first_name_ar}،`,
    content1:
        emailData.language === 'en'
            ? `Your request to become a consultant has been approved.`
            : `تم تأكيد طلبك لتكون مستشارًا.`,
    content2:
        emailData.language === 'en'
            ? `Click the button below to view your profile.`
            : `انقر على الزر أدناه لعرض ملفك الشخصي.`,
    button_text:
        emailData.language === 'en'
            ? 'Your Dashboard'
            : 'عرض الملف الشخصي',
    subject:
        emailData.language === 'en'
            ? 'Consultant Request Approved'
            : 'تم تأكيد طلب المستشار'
};

// when his request get rejected ** we are not using but in canse if you we want to sent we can sent
   // if status is rejected
   if (emailData.status === 'rejected') {
    dynamicTemplateData.content1 =
        emailData.language === 'en'
            ? `Your request to become a consultant has been rejected.`
            : `تم رفض طلبك لتكون مستشارًا.`;
    dynamicTemplateData.content2 =
        emailData.language === 'en'
            ? `Click the button below to view your profile.`
            : `انقر على الزر أدناه لعرض ملفك الشخصي.`;
    dynamicTemplateData.subject =
        emailData.language === 'en'
            ? 'Consultant Request Rejected'
            : 'تم رفض طلب المستشار';
}

// when his request is pending/under review
        // if status is pending
        if (emailData.status === 'pending') {
           
            dynamicTemplateData.url = `https://fozdeal.com/consultants`;
            dynamicTemplateData.content1 =
                emailData.language === 'en'
                    ? `Your request to become a consultant is under review.`
                    : `تم رفض طلبك لتكون مستشارًا.`;
            dynamicTemplateData.content2 =
                emailData.language === 'en'
                    ? `Click the button below to view all the consutlants.`
                    : `انقر على الزر أدناه لعرض ملفك الشخصي.`;
            // button
            dynamicTemplateData.button_text =
                emailData.language === 'en'
                    ? 'View Consultants'
                    : 'عرض المستشارين';
            dynamicTemplateData.subject =
                emailData.language === 'en'
                    ? 'Consultant Request Pending'
                    : 'تم رفض طلب المستشار';
        }


// when the consultant status is set to inactive
        // if status is inactive
        if (emailData.status === 'inactive') {
            // url
            dynamicTemplateData.url = `https://fozdeal.com`;
            dynamicTemplateData.content1 =
                emailData.language === 'en'
                    ? `Your profile is inactive.`
                    : `تم رفض طلبك لتكون مستشارًا.`;
            dynamicTemplateData.content2 =
                emailData.language === 'en'
                    ? `Click the button below to contact the administrator.`
                    : `انقر على الزر أدناه للاتصال بالمسؤول.`;
            // button
            dynamicTemplateData.button_text =
                emailData.language === 'en'
                    ? 'Contact Administrator'
                    : 'الاتصال بالمسؤول';
            dynamicTemplateData.button_text =
                emailData.language === 'en'
                    ? 'View Consultants'
                    : 'عرض المستشارين';
            dynamicTemplateData.subject =
                emailData.language === 'en'
                    ? 'Consultant Profile Inactivated'
                    : 'تم تعطيل ملف المستشار';
        }


// ***************** this email is send to admin when the admin will recieve consultant request
 // admin email
 const AdminMsg = {
    to: this.adminEmail,
    from: { email: this.from, name: 'FOZDEAL' },
    dynamicTemplateData: {
        url: `https://fozdeal.com/admin/consultants`,
        greeting: `Hi Admin`,
        content1: `You have new Consultant Request Waiting for your action`,
        content2: `Consultant name: ${first_name} ${last_name}`,
        button_text: 'View Request',
        subject: 'Consultant Request'
    },
    templateId: this.templateIds.content2ButtonEn
};



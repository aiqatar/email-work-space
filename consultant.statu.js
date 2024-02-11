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
            ? `Thank you for joining FOZDEAL consultants team!`
            : `سعداء بانضمامك إلى فريق مستشاري فوزديل`,
    content2:
        emailData.language === 'en'
            ? `Click below to view your profile.`
            : `انقر على الزر أدناه لعرض التفاصيل.`,
    button_text:
        emailData.language === 'en'
            ? 'Your Dashboard'
            : 'لوحة التحكم',
    subject:
        emailData.language === 'en'
            ? 'Approved: Consultant Request'
            : 'تم انضمامك كمستشار'
};

// when his request get rejected ** we are not using but in canse if you we want to sent we can sent
   // if status is rejected
   if (emailData.status === 'rejected') {
    dynamicTemplateData.content1 =
        emailData.language === 'en'
            ? `Your request to become a consultant has not been approved yet.`
            : ` لم يتم معالجة طلبك للانضمام كمستشار بعد`;
    dynamicTemplateData.content2 =
        emailData.language === 'en'
            ? `Click the button below to view your profile.`
            : `انقر على الزر أدناه لعرض ملفك الشخصي.`;
    dynamicTemplateData.subject =
        emailData.language === 'en'
            ? 'Your Request'
            : 'بخصوص طلبك';
}

// when his request is pending/under review
        // if status is pending
        if (emailData.status === 'pending') {
           
            dynamicTemplateData.url = `https://fozdeal.com/consultants`;
            dynamicTemplateData.content1 =
                emailData.language === 'en'
                    ? `Your request is under review.`
                    : `طلبك قيد المراجعة`;
            dynamicTemplateData.content2 =
                emailData.language === 'en'
                    ? `Click the button below to view all the consutlants.`
                    : `انقر على الزر أدناه للاطلاع على صفحة المستشارين.`;
            // button
            dynamicTemplateData.button_text =
                emailData.language === 'en'
                    ? 'View Consultants'
                    : 'قائمة المستشارين';
            dynamicTemplateData.subject =
                emailData.language === 'en'
                    ? 'Consultant Request Pending'
                    : 'الطلب قيد المراجعة';
        }


// when the consultant status is set to inactive
        // if status is inactive
        if (emailData.status === 'inactive') {
            // url
            dynamicTemplateData.url = `https://fozdeal.com`;
            dynamicTemplateData.content1 =
                emailData.language === 'en'
                    ? `Your profile is inactive.`
                    : `حسابك غير مفعّل`;
            dynamicTemplateData.content2 =
                emailData.language === 'en'
                    ? `Click the button below to contact the admin.`
                    : `يمكنك التواصل مع الإدارة عبر الرابط التالي`;
            // button
            dynamicTemplateData.button_text =
                emailData.language === 'en'
                    ? 'Contact Us'
                    : 'تواصل معنا';
            dynamicTemplateData.subject =
                emailData.language === 'en'
                    ? 'Account is Inactivated'
                    : 'الحساب غير مفعّل';
        }


// ***************** this email is send to admin when the admin will recieve consultant request
 // admin email
 const AdminMsg = {
    to: this.adminEmail,
    from: { email: this.from, name: 'FOZDEAL' },
    dynamicTemplateData: {
        url: `https://fozdeal.com/admin/consultants`,
        greeting: `Hi Admin`,
        content1: `You have a new consultant request waiting for your action`,
        content2: `Consultant name: ${first_name} ${last_name}`,
        button_text: 'View Request',
        subject: 'Consultant Request'
    },
    templateId: this.templateIds.content2ButtonEn
};



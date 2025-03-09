import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is 1099 Pro?',
      answer:
        '1099 Pro is an all-in-one app designed to help healthcare contractors manage their business. It simplifies finances, taxes, invoicing, facility management, and scheduling all in one place.',
    },
    {
      question: 'Can 1099 Pro help with my taxes?',
      answer:
        'Yes! 1099 Pro helps track tax deductions, organize income, and generate reports to make tax season easier. We also provide estimated tax calculations so you’re never caught off guard.',
    },
    {
      question: 'Does 1099 Pro handle invoicing?',
      answer:
        'Absolutely! You can create, send, and track invoices directly within the app, ensuring you get paid on time and with minimal hassle.',
    },
  ],
  [
    {
      question: 'Can I use 1099 Pro to schedule my shifts?',
      answer:
        'Yes! Our scheduling tool allows you to organize your shifts, set reminders, and even sync with facility schedules to keep everything streamlined.',
    },
    {
      question: 'Does 1099 Pro integrate with payment platforms?',
      answer:
        'Yes, we support multiple payment options, including direct deposit, PayPal, and other secure payment gateways to make receiving payments quick and easy.',
    },
    {
      question: 'Is my financial data secure?',
      answer:
        'Security is our top priority. 1099 Pro uses bank-grade encryption to protect your financial data, ensuring your information remains safe and private.',
    },
  ],
  [
    {
      question: 'Can 1099 Pro help me find new contract opportunities?',
      answer:
        'While we don’t directly connect you with contracts, we provide networking tools, job tracking features, and resources to help you find and secure more work.',
    },
    {
      question: 'Is 1099 Pro only for healthcare professionals?',
      answer:
        'While it’s built with healthcare contractors in mind, any independent contractor can use 1099 Pro to manage their business effectively.',
    },
    {
      question: 'How much does 1099 Pro cost?',
      answer:
        'We offer multiple pricing plans, including a free version with basic features and premium plans for advanced tools. Check our pricing page for the latest details.',
    },
  ],
];


export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg/6 font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

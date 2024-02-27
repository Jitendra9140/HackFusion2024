import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const FaqAccordion = () => {
  const faqs = [
    { id: 1, question: 'When will my order arrive?', answer: 'Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation' },
    { id: 2, question: 'How do I track my order?', answer: 'Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.' },
    { id: 3, question: 'What’s your return policy?', answer: 'We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.' },
    { id: 4, question: 'How do I make changes to an existing order?', answer: 'Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require.' },
    { id: 5, question: 'What shipping options do you have?', answer: 'For USA domestic orders we offer FedEx and USPS shipping.' },
    { id: 6, question: 'What payment methods do you accept?', answer: 'Any method of payments acceptable by you. For example: We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc.' },
  ];
 
  return(
    <div id='faqs'>
    <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 ">
    <h1  data-aos="zoom-in-down" className="text-[40px] font-semibold text-transparent bg-clip-text hover:text-white bg-gradient-to-r from-purple-500 to-cyan-500 py-20">FAQ</h1>
    <div className="w-full  flex   my-1">
       <div   className=' w-full  flex   md:flex-row ip:flex-col justify-between md:gap-[50px]  mb:gap-3'>
      <ul data-aos="zoom-in-right"  className="flex flex-col  gap-2">
         {faqs.map((faq) => ( 
           <Accordion key={faq.id} className='bg-[#070F2B] text-white  py-[10px] '>
           <AccordionSummary
           expandIcon={<ArrowDropDownIcon  className='text-white'/>}
             aria-controls="panel2-content"
             id="panel2-header"
           >
             <Typography>{faq.question}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
                {faq.answer}
             </Typography>
           </AccordionDetails>
         </Accordion>
        ))}
      </ul>
      <ul data-aos="zoom-in-left" className="flex flex-col gap-2">
         {faqs.map((faq) => ( 
           <Accordion key={faq.id} className='bg-[#070F2B] text-white   py-[10px]'>
           <AccordionSummary
           expandIcon={<ArrowDropDownIcon  className='text-white'/>}
             aria-controls="panel2-content"
             id="panel2-header"
           >
             <Typography>{faq.question}</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography>
                {faq.answer}
             </Typography>
           </AccordionDetails>
         </Accordion>
        ))}
      </ul>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FaqAccordion;



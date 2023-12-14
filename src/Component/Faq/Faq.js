import React from 'react'
import './Faq.css'
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const Faq = () => {
    const styleObj ={
        width: '80vw',
        margin: 'auto',
        borderRadius: '50px',
        backgroundColor: '#fff',
        padding: '25px 25px',
        boxShadow: '20px 20px 85px 20px #06060633',
    }
    const itemButton ={
        backgroundColor:'inherit',
        boxShadow: 'none',
       color:'#a8864b',
       fontFamliy: 'Lato,serif',
       fontSize: '20px',
       fontWeight: '600',
       padding:'25px',
       display: 'flex',
       flexDirection:'row-reverse',
       justifyContent:'space-between'
    }
    const p ={
        fontFamily: 'Merriweather,Georgia,serif',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: '400',
        padding:'20px',
        color: '#686868',
        borderTop: '1px solid #e5e1da'
    }
    const items ={
        border:'none',
    }
  return (
   
    <>
    <div className='neenth-section'>
        <div className="inner-container">
            <div className="section-title">
                <h2>FAQs</h2>
            </div>
        <Accordion style={styleObj}>
            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    What is statutory health insurance (SHI) in Germany?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    SHI is mandatory health insurance financed by contributions from employees and employers, covering a wide range of medical services.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    How does the German healthcare system work?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    Germany's healthcare system comprises statutory health insurance (SHI) and private health insurance (PHI). SHI is mandatory, while PHI offers more comprehensive coverage at a higher cost
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    How does the German healthcare system work?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    Germany's healthcare system comprises statutory health insurance (SHI) and private health insurance (PHI). SHI is mandatory, while PHI offers more comprehensive coverage at a higher cost
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            
            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    Can I choose my own doctor and hospital with SHI?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    Yes, SHI allows policyholders the freedom to choose their preferred doctors and hospitals.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    What's the difference between statutory and private health insurance in Germany?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    Statutory health insurance currently costs an average of 16.3% of gross wages half of gross wages (half of which paid by employer) plus long-term care insurance (which accounts for around 20% gross wages). The cost of private health insurance, on the other hand, depends on age, state of health and benifits
                    </p>
                </AccordionItemPanel>
            </AccordionItem>


            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    How much does health insurance cost in Germany?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    Costs vary based on income and insurance type. On average, SHI is around 14% of gross salary (shared between employee and employer), while PHI can cost several hundred euros monthly.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    How much does health insurance cost in Germany?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    Costs vary based on income and insurance type. On average, SHI is around 14% of gross salary (shared between employee and employer), while PHI can cost several hundred euros monthly.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    Who is eligible for statutory health insurance in Germany?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    All legal residents must have health insurance. Those earning below a certain amount are obligated to have SHI, while higher earners have the option for private insurance.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>


            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    Is private health insurance in Germany worth it?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p>
                    It depends on your needs. PHI provides more comprehensive coverage, additional benefits, shorter waiting times, and greater flexibility. Compare options to find what suits you best.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    What are the benefits of private health insurance in Germany?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p style={p}>
                    All legal residents must have health insurance. Those earning below a certain amount are obligated to have SHI, while higher earners have the option for private insurance.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    How does the German healthcare system compare to other countries?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p} >
                    <p >
                    Germany's healthcare system is highly regarded globally, known for its universal coverage, freedom to choose doctors and hospitals, and high satisfaction levels. However, healthcare costs have been rising.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem style={items}>
                <AccordionItemHeading>
                    <AccordionItemButton style={itemButton}>
                    What is the annual insurance limit for 2023?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel style={p}>
                    <p >
                    For 2023, you can switch to private health insurance if your gross income exceeds €66,600 per year or €5,550 per month. Still, have questions? Contact us for personalized guidance and explore the best health insurance options in Germany.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>


            


        </Accordion>
        </div>

    </div>
    </>
  )
}

export default Faq
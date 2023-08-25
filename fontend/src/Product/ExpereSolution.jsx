import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import styled from 'styled-components'
import { Text } from '@chakra-ui/react'
import { BooksComponents } from './BooksComponents'
import { Review } from './Review'
import { AnotherReview } from './AnotherReview'
import { Faqs } from './Faqs'


export const ExpereSolution = () => {
  return (
    <DIV>

      <div className='topSection'>

        <div style={{ position: 'relative' }}>
          <Box>
            <Image className='backImage' src='https://quizlet.com/_next/static/media/landing-page-header-jagged-lines-day.ea330eb6.svg' alt='Dan Abramov' />
          </Box>
          <Text fontSize={{ base: "16px", md: "24px", lg: "30px" }} className='heading'>
            Find free textbook solutions you can trust
          </Text>

          <Image className='excercise' src='https://quizlet.com/_next/static/media/landing-page-header-phone-exercise.01626b15.svg' alt='Dan Abramov' />
          <Image className='solution' src='https://quizlet.com/_next/static/media/landing-page-header-phone-solution.f3708594.svg' alt='Dan Abramov' />


          <div className='section'>

            <div style={{ display: "flex" }}>
              <Image style={{ width: '8%' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZV1M_6bsJNr_0yX6iUxlpuYnIep7EhCKBw&usqp=CAU' alt='Dan Abramov' />
              <Text fontSize={{ base: "16px" }} className='verifiedAnswer' >
                step-by-step explanations
              </Text>

            </div>

            <div style={{ display: "flex" }}>
              <Image style={{ width: '8%' }} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAA9lBMVEX/////wzT/0mjirzjMzMzXb27ilmPajo3IWVfnqYD/z18AAADlsTfPgEv/0WL7wDT/8NDhrCni4uL/8tbZiYj26Mv15cT04r7L0NDz29vUZ2bSm5vPzcbwx2//wyzgqh/jm2v7vDvlo3bNeDzjqqnpv7715ubsyMfXgYDYeXjTvr7Ss7PouLjGUlDVy7T70W761HnQo6LBQkDxw1/etFbgskz55tTyyKP69PH1wHDyu3P128zqtZPmm1r56eDsplTwyrLzsU32tkTUjkbbnUHirHh8eHU1IRNpRzEQERJ8VTympqahakZNS0u5aTB/cmqHh4cjJCR/xZwcAAAC90lEQVRoge3aXXfSQBAG4E0CCSXZ8GG0gDW0ARWLwWqthgIVqtZqWz/+/59xN0klAZJczQyHOhfcPmdm38wm58DYw6h2//kLMttxHKNPw7cNWY7xksJ2jKgGBp3tlDuvkEefsMvYettI2Mh6M22j6s3ScdqWOppdah07KVvoOJkXttCHTsoW+mssW+qDcrr8NpYt9KedlF3xB2i2qJReEQXcetJO9S5tv49nJ/VKiIPOvT4qbdYrUUGOvW6/Odioxzbk3Vq3VftkVZepi2gf2FZV+9kq3nrrh/Y70JlXVVn2yWYddMPEtqpWT9fOfVjxoc87thX3dK33YQfUVv/ZiuKunXupCWnbCXuDDmpXU7ayOnlUe0VHnPmajm4ndAJbqTXeHxCcd2RrWuNsRNS3Jso6G5HZmmU9IbM1SrvxmM7uEtqgfT8izNrSrqFnLb9v4PPO3mvwtrqFObcQ9lrWzBHsgqw1CHcq5V6jzBrsTs3NmmbtQ9q5fWsNSLvovHc251k71YJ/vgvOmzJrJLZCv1Nh31MLskbyrohxh1Lu1HwbNmv574o7m7X8+xt4p25x1gjv7we7U0m+gXc9axl2fH93KXO+qzuV8tuAMmuk93fBzEHPm3KvFdj/swZgZ30TYeScMGuk9/cWZk2hvL8Jz3vXc76N9zdG1opsivsbpe8tzhrKTrU3zhz024Bl7RYN/rzZhypZzhn7KE7cJjlvxoK98Xh8fj7G32uiJt6erEMXPWuipqHtzVz8vtlFZOufXHybzUNc1xcEdjCNGtcv154xcDuaurD1I/S+47jpEnfd2tHlYrHAs4PwKZO4PpvJX87R7PAh9/Rlcf7ZwrLDqSdpzr9YWHbg3Q/93uYYey2qeWLoIS2m3sXpm7Hl0COa9/jX/QDHvvBSdq93OL/AkUVdfbtO0Pp0giYz1vxu/ojtHvcmSOOO68Y0r29v5bg54rjjujNl/eRTdJmxVmj/Qh53XL9N8+4G8v+wefXnqkTStKyATGbsLy1+ZaTUKfXgAAAAAElFTkSuQmCC' alt='Dan Abramov' />
              <Text fontSize={{ base: "16px" }} className='verifiedAnswer' >
                Expert-written and verified answers
              </Text>

            </div>

            <div style={{ display: "flex" }}>
              <Image style={{ width: '8%' }} src='data:image/jpeg;base64,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' alt='Dan Abramov' />
              <Text fontSize={{ base: "16px" }} className='verifiedAnswer' >
                Millions of solutions for popular textbooks
              </Text>

            </div>

          </div>


        </div>


        <div style={{ width: "80%", margin: "auto" }}>
          <input type="text" placeholder='Search textbooks, ISBNs, questions'
            className='searchBar'
          />
        </div>


        {/* Books Components */}

        <div style={{ width: '80%', margin: "auto" }}>

          <BooksComponents />

        </div>

      </div>


      <div style={{ width: "80%", margin: "auto" }}>
        <Review image={"https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/step-by-step-day.6c08ac80.svg"}
          heading={"Step-by-step explanations promote deeper understanding"}
          text={"Step-by-step explanations break down complex concepts into smaller, manageable pieces. This approach enables you to grasp each step of the topic thoroughly before moving on to the next, reducing the chances of confusion and promoting deeper understanding. Ultimately, you will gain a comprehensive understanding of the subject matter, leading to improved retention and recall for future exams or homework assignments."}
          
          appleStore={""}
          googlePlay={""}


        />
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
        <AnotherReview />
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
        <Review image={"https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/millions-of-solutions-day.d80520fb.svg"}

          heading={"Millions of solutions and counting"}
          text={"With millions of verified textbook solutions from 14,000 popular textbooks, you can rest assured that our expansive solution library can support you in all of your toughest classes. Our solutions are carefully crafted by expert educators to provide you with accurate and comprehensive support. With our ever-growing library, you can tackle any academic challenge, whether youre stumped on your or need step-by-step guidance for solving a complex calculus problem.From high school to college and beyond, our textbook solutions have you covered throughout your educational journey."}

          appleStore={""}
          googlePlay={""}
        />
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
        <Text fontSize={{ base: "16px", md: "24px", lg: "30px" }} className='subjectCategory' style={{marginLeft: "15px"}}>
          Explore our textbooks by subject
        </Text>
      </div>

      <div style={{ width: "80%", margin: "auto" }}>

        <Text fontSize={{ base: "16px", md: "24px", lg: "30px" }} className='subjectCategory' style={{marginLeft: "15px"}}>
          FAQs
        </Text>

        <Faqs />
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
        <Review
        image={"https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=500,onerror=redirect,w=500/https://assets.quizlet.com/_next/static/media/mobile-callout@2x.a08a9b45.png"}
        heading={"Study on the go"}
        text={"Study anywhere — even offline — with our iOS and Android apps. Your progress syncs across your phone and computer."}


        appleStore={"https://quizlet.com/_next/static/media/apple.4170bb1a.png"}
        googlePlay={"https://quizlet.com/_next/static/media/google_play.fca45251.png"}


         />

      </div>

    </DIV>
  )
}

const DIV = styled.div`


.topSection{
  position: relative;
background-color: #dbdfff99;
}

.heading{
  position: absolute;
  top: 20px;
  padding: 10px;
  left: 20px;
  font-size: 2.75rem;
  font-weight: bold;
  color: #2e3856;
  font-family: hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif;
  width: 40%;
  /* border: 2px solid red; */
  margin-left: 100px;

}

.backImage{
  margin-left: 488px;
  height: 350px;
}

.excercise{
  position: absolute;
  right: 200px;
  top: 5px;
}

.solution{
  position: absolute;
  right: 0px;
  top: 10px;
}

.section{
  position: absolute;
  bottom: 20px;
  left: 20px;
  /* border: 2px solid yellow; */
  margin-left: 100px;
}

.section > div{
  margin-bottom: 10px
}

.verifiedAnswer{
  font-family: hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif;
  text-align: center;
  margin-left: 10px;
  color: #2e3856;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: normal;
    line-height: 1.5;

}

.searchBar{
  height:50px;
  width: 900px;
}

.subjectCategory{
  font-size: 2rem;
  font-weight: bold;
  color: #2e3856;
  font-family: hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif;;

}
  
`

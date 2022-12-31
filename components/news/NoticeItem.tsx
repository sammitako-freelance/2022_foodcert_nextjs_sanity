import { motion } from "framer-motion";
import LinkButton from "../LinkButton";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

type Props = {};

const NoticeItem = (props: Props) => {
  const contentContainer = "relative pt-[10px]";
  const contentBorder =
    "before:content-[''] before:border-t-custom-blue before:border-t-[4px] before:absolute before:left-[47%] before:md:left-0 before:top-0 before:w-[20px]";
  return (
    <section>
      {/* HERO BACKGROUND */}
      <div className="pt-10 md:pt-14 h-[230px] md:h-[300px] bg-cover bg-no-repeat	bg-center bg-notice-item-background">
        <div
          id="content-container"
          className="mt-20 mb-14 tracking-widest leading-relaxed mx-auto w-5/6 items-center justify-center h-full"
        >
          <p id="content-line" className="text-2xl font-bold text-custom-beige">
            Post
          </p>
        </div>
      </div>
      {/* TITLE */}
      <div className="bg-white">
        <div className="py-24 w-5/6 mx-auto space-y-5">
          <div
            className={`inline-block self-start iuppercase py-2 px-4 rounded-md text-sm text-custom-beige group-hover:opacity-70 bg-custom-blue`}
          >
            EFSA
          </div>
          <p className="text-4xl font-bold">How to Improve Your Credit Score</p>
          <div className="flex justify-between items-center">
            <div className="flex space-x-10 text-sm">
              <div className="flex flex-col space-y-2">
                <div className="text-gray-600">작성자</div>
                <div className="text-custom-black font-bold">관리자</div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-gray-600">작성일</div>
                <div className="text-custom-black font-bold">2022-09-20</div>
              </div>
            </div>
            <div className="flex space-x-10 text-custom-black">
              <div>
                <FaFacebook className="w-5 h-5" />
              </div>
              <div>
                <FaTwitter className="w-5 h-5" />
              </div>
              <div>
                <FaLinkedinIn className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTENT */}
      <div className="bg-custom-light-gray">
        <div className="py-24 w-5/6 md:w-4/6 mx-auto">
          <div>
            Have you applied for a loan or credit card, only to be told that
            your score is too low? Even if you’ve never experienced this, it’s
            common to want to focus on ways to improve your credit score. Before
            you fill out your next credit application, learn how credit scores
            work and the things you can do to get it to the next level. ‍ How
            are credit scores calculated? ‍ While there isn’t just one credit
            score that banks and lenders focus on when making credit decisions,
            there are some consumer-friendly models that can help you understand
            your credit-worthiness. These scores include the FICO score, which
            is collated by Experian and ranks you on a scale of 300 to 850. ‍ We
            don’t know the exact algorithm that creates the figure. However, we
            do know that the actions you take that would make this score go up
            or down would likely affect the other types of scores offered by
            other companies like TransUnion and Equifax. ‍ FICO, for example,
            looks at some very specific financial actions to create their score.
            These factors include: ‍ Your payment history Your total available
            credit (also known as total credit limit) The amount of credit you
            are using (also known as credit utilization) The age of your credit
            accounts The type of credit accounts you have open The number and
            frequency of credit applications you’ve made ‍ Some factors, such as
            making all of your payments on time, affect your score greatly.
            Other factors, such as the age of your accounts, don’t matter quite
            as much. It’s the big picture that most creditors see, and that’s
            why credit scores can be a useful indicator of your ability to
            handle credit. ‍ 7 tips to improve your credit score ‍ Moving the
            needle on your credit score takes a committed attitude and patience.
            Not every action will have the same effect, and some positive score
            changes might be small at first. The good news is that you could see
            an impact on your credit score in as soon as 60-90 days, depending
            on the action you take. Begin by using this list of recommended
            financial activities. Doing even just one can help. ‍ 1. Review your
            credit reports ‍ Lenders will ask to see a copy of your credit
            report every time you apply for credit. When was the last time you
            did the same? With each consumer getting access to one free credit
            report from each of the three credit bureaus, you have no excuse to
            be in the dark about your credit. You can ask for these each year,
            and it’s recommended you check them for errors and dispute any
            mistakes you see. ‍ 2. Set up automatic payments or reminders ‍ The
            best way to make sure your credit cards are paid on time is to
            schedule it to happen automatically. If you struggle to maintain a
            healthy balance in your checking account, however, this could cause
            you to overdraw your account. Instead, consider setting reminders in
            your phone calendar, or use a free budgeting app that will alert you
            to when payments are due. ‍ 3. Pay off balances and keep balances
            low ‍ One factor that goes into determining your credit score is
            called “credit utilization.” It’s the number you get when you divide
            the credit you’ve used by the total of all your credit lines. If you
            have a utilization ratio of 30% or more, your credit score will
            suffer. For this reason, paying down your cards is one of the
            fastest ways to boost a score. Keep paying down your credit card
            balances, and keep those numbers low to see your score climb over
            time. This may require you to make frequent payments to a card per
            billing cycle. ‍ 4. Apply for and open new credit accounts only as
            needed ‍ While getting access to additional credit can raise your
            score momentarily through that utilization score we talked about, it
            also comes with risk. If you have a hard time keeping balances low,
            it’s probably not a good idea to open more credit lines. Each time
            you apply for a card, the lender will do a credit check (also called
            a “hard inquiry”) as well. Too many hard inquiries can cause your
            score to dip. Consider how any new account will affect your spending
            habits and score before you apply. ‍ 5. Don't close unused credit
            cards ‍ If you feel tempted to use credit in an unhealthy manner,
            you may have also considered closing your credit accounts. But there
            are better options, such as restricting access to your physical
            card. When you close an account, you do a few things that can harm
            your score: ‍ Your utilization ratio will go up, because your
            available credit goes down The overall age of your credit accounts
            may drop, especially if you are closing an old account ‍ You may
            lose access to earned perks, miles, or statement credit once the
            account is closed as well. If you must close an account, consider a
            newer account first, and only after you’ve redeemed any perks you
            earned. ‍ 6. Ask your utility and phone providers to report on-time
            payments ‍ If you fail to pay a monthly bill, you will get reported
            to the credit bureaus. But this isn’t always the case for on-time
            payments. Inquire about having your payments to utility and phone
            companies reported to the credit bureaus. This can help establish a
            history of timely payments and get your score closer to where you
            want it to be. ‍ 7. Consider a debt consolidation plan ‍ If you're
            really overwhelmed by minimum monthly payments, or you feel that you
            aren't making progress on large credit balances with high interest
            rates, it may be time to call the professionals. Debt consolidation
            plans are an effective way to reduce rates and see more of your
            money go to the principal. Plus, it could lower your monthly payment
            amounts on each card, giving you more money to put toward the debt.
            This could lower your credit score temporarily while you get
            payments underway, but some people find the trade-off worth it. ‍
            How long does it take to rebuild credit? ‍ Depending on your credit
            history, it can take months or years to correct it. Your best move
            is to make your payments on time and be diligent about not opening
            up too many cards at once or using up your available credit lines. ‍
            Hard inquiries can stay on your report for a year or two, but late
            payments can remain for up to seven years. If you have experienced a
            judgment or bankruptcy, it may not leave your record for ten years.
            ‍ Whatever the reason for a poor credit history, the only way
            forward is through paying your bills and not taking on more debt
            than you can handle. Your score will improve over time, and lenders
            will see you as a better credit risk. ‍ If you are new to credit or
            want to change the way you use credit and have an average or higher
            credit score, consider a Petal card. Petal uses data to offer higher
            limits and help you potentially lower your credit utilization. Learn
            how we stack up to the competition and much more. ‍
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-24 bg-white">
        <LinkButton
          pathLink="/notice"
          title="View All"
          backgroundColor="bg-custom-black"
          textColor="text-custom-beige"
          borderColor=""
        />
      </div>
      <style jsx>{`
        /* 
      https://www.w3docs.com/snippets/css/how-to-limit-border-length-with-css.html
      */
        #content-container {
          position: relative;
          padding-top: 10px;
        }
        #content-line:before {
          content: "";
          border-top: #f1f1e7 4px solid;
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
        }
      `}</style>
    </section>
  );
};

export default NoticeItem;

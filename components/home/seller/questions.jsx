import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material"
import { Box } from "@mui/system"
import { ArrowDown2 } from "iconsax-react"
import { useState } from "react"

const Questions = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const question = ({ q, a, id }) => (
    <Accordion expanded={expanded === id} onChange={handleChange(id)}>
      <AccordionSummary
        expandIcon={<ArrowDown2 size="32" color="#007BFF" variant="Bulk" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ flexShrink: 0 }}>{q}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{a}</Typography>
      </AccordionDetails>
    </Accordion>
  )

  const qa = [
    {
      id: "1",
      q: "فروشگاه بهار برای چه فروشندگانی بستر مناسب‌تری می‌باشد؟!",
      a: "فروشگاه اینترنتی  بهار با فراهم آوردن موقعیتی مناسب و شرایطی آسان برای فروشندگان عزیز توانسته مارکت پلیس مورد اعتمادی برای تمامی فروشندگان تمامی کالاها باشد که هر فروشنده در هر زمینه‌ای توانایی فروش را با بهترین تجربه داشته باشد.",
    },
    {
      id: "2",
      q: "مراحل فروشنده شدن در فروشگاه بهار چه هستند؟!  ",
      a: " ثبت نام در پنل تامین کننده فروشگاه بهار - قیمت گذاری در پنل تامین کننده- شروع فروش کالا در سایت فروشگاه بهار",
    },
    {
      id: "3",
      q: "امتیازات فروش در فروشگاه بهار شامل چه چیزهایی هستند؟!",
      a: " ارسال کالا به سراسر ایران- فروش بیست و چهار ساعته- بی دردسر شدن فروش- مدیریت کامل محصولات- بازدید هر روزه جامعه بزرگ مشتریان فروشگاه بهار از کالاهای شما ",
    },
  ]

  return (
    <Box sx={{ bgcolor: "#fff", py: "48px", borderRadius: "16px" }}>
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "32px",
          textAlign: "center",
        }}
      >
        سوالات متداول
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ mx: "16px" }}>{qa.map((item) => question(item))}</Box>
        <Box component="img" src="/assets/images/question.png" />
      </Box>
    </Box>
  )
}

export default Questions

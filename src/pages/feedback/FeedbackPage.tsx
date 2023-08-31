import { Box, Button, TextField, Typography } from '@mui/material'
import { sx } from './styles'
import { insertFeedbackSubmissionAsync } from '../../api/feedback'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const FeedbackPage = () => {
  const { id: quizId } = useParams()
  const [feedbackText, setFeedbackText] = useState('')

  const handleTextFieldChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFeedbackText(e.target.value)
  }

  const handleSubmitFeedback = () => {
    if (quizId) {
      insertFeedbackSubmissionAsync({
        quizId: quizId,
        text: feedbackText,
      })
      alert('Your feedback has been received!')
    }
  }

  return (
    <>
      <Box sx={sx.page}>
        <Typography color="white" variant="h3">
          Thanks for participating in our study!
        </Typography>
        <Typography color="white" variant="h6" sx={{ mt: '8px' }}>
          If you have any feedback or additional comments for us, please type
          them into the box below. Otherwise, feel free to close the tab!
        </Typography>
        <Box sx={{ width: 600 }} display="flex" flexDirection="column">
          <TextField
            multiline
            fullWidth
            rows={10}
            variant="filled"
            onChange={handleTextFieldChange}
            sx={{
              mt: '8px',
              border: 'white',
              bgcolor: 'white',
            }}
          />
          <Button
            sx={sx.button}
            variant="contained"
            fullWidth
            onClick={handleSubmitFeedback}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default FeedbackPage

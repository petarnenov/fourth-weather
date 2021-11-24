import React, { MouseEventHandler } from 'react';
import { Modal, Typography, Box } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  open: boolean;
  forecastByHours: ForecastList[];
  handleClickShowByHours: MouseEventHandler<HTMLButtonElement>;
}

const ForecastByHours: React.FC<Props> = ({
  open,
  forecastByHours,
  handleClickShowByHours,
}) => {
  const dayForecastByHours = forecastByHours.map((hourRange) => (
    <Typography key={hourRange.dt}>
      {hourRange.dt_txt} {hourRange.weather[0].main}
    </Typography>
  ));

  return (
    <Modal
      open={open}
      onClose={handleClickShowByHours}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>{dayForecastByHours}</Box>
    </Modal>
  );
};

export default ForecastByHours;

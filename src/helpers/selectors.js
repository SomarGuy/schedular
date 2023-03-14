export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.find((d) => d.name === day);
  if (!filteredDay) return [];
  return filteredDay.appointments.map((id) => state.appointments[id]);
}

export function getInterview(state, interview) {
  return interview
    ? {
        ...interview,
        interviewer: state.interviewers[interview.interviewer],
      }
    : null;
}

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.find((d) => d.name === day);
  if (!filteredDay) return [];
  return filteredDay.interviewers.map(
    (id) => state.interviewers[id]
  );
}

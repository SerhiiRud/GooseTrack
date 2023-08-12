import {
  List,
  ListItemDesktop,
  ListItemMobile,
} from './DayCalendarHead.styled';

export const DayCalendarHead = ({ selectedWeek }) => {
  return (
    <List>
      <ListItemMobile>M</ListItemMobile>
      <ListItemMobile>T</ListItemMobile>
      <ListItemMobile>W</ListItemMobile>
      <ListItemMobile>T</ListItemMobile>
      <ListItemMobile>F</ListItemMobile>
      <ListItemMobile>S</ListItemMobile>
      <ListItemMobile>S</ListItemMobile>

      <ListItemDesktop>MON</ListItemDesktop>
      <ListItemDesktop>TUE</ListItemDesktop>
      <ListItemDesktop>WED</ListItemDesktop>
      <ListItemDesktop>THU</ListItemDesktop>
      <ListItemDesktop>FRI</ListItemDesktop>
      <ListItemDesktop>SAT</ListItemDesktop>
      <ListItemDesktop>SUN</ListItemDesktop>

      {/* {selectedWeek.map(day => (
        <DateWrapper key={nanoid()}>
          <CurrentDay>{day}</CurrentDay>
        </DateWrapper>
      ))} */}
    </List>
  );
};

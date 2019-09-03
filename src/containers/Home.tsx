import * as React from "react";
import Box, { BoxItem } from '../components/box'
import Page from '../components/page'
import { isToday, getFormatedTime } from '../libs/utils'
import * as openingHours from '../data/openingHours'
interface HomeProps { compiler: string; framework: string; }

type HomeState = {
    data: any[]
}

const makeData = (data: any): any => {
    const weekDays = Object.keys(data);
    return weekDays.map((dayName, dayIndex) => {
        let dayContent = ''
        let result: any[] = []
        data[dayName].forEach((item: any, i: number) => {
            if (item.type === 'open') {
                dayContent = getFormatedTime(item.value)
            }
            else if (item.type === 'close' && i > 0 && data[dayName][i - 1].type === 'open') {

                dayContent += " - " + getFormatedTime(item.value)
                result.push(dayContent)
                dayContent = ''
            }
        })

        if (dayContent !== '') {
            const nextDayKey = weekDays[dayIndex + 1]
            dayContent += " - " + getFormatedTime(data[nextDayKey][0].value)
            result.push(dayContent)
        }
        return {
            day: dayName,
            isOpen: result.length > 0,
            text: result.length === 0 ? "Closed" : result.join(', '),
            isToday: isToday(dayName)
        }
    })
}
export class Home extends React.Component<HomeProps, HomeState> {
    componentDidMount() {
    }

    render() {
        return <Page pageTitle="Home" pageVerticalAlign="middle">
            <Box title="Opening hours" >
                {makeData(openingHours.default).map((item: any, index: number) =>
                    <BoxItem key={index} grayValue={!item.isOpen} label={item.day} value={item.text} subLabel={item.isToday && "Today"} />
                )}
            </Box>
        </Page>;
    }
}
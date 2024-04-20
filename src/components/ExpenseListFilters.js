import React, { useState } from "react";
import { DateRangePicker } from 'react-dates';
import { useDispatch, useSelector } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";

const ExpenseListFilters = () => {

    const filters = useSelector(state => state.filters);
    const dispatch = useDispatch();
    const [focusedInput, setFocusedInput] = useState(null);

    const onDatesChange = ({startDate, endDate}) => {
        dispatch(setStartDate(startDate));
        dispatch(setEndDate(endDate))
    };

    const onFocusChange = (calenderFocused) => {
        setFocusedInput(() => ( calenderFocused ));
    };

    return (
        <div>
            <input
                type="text"
                value={filters.text}
                onChange={(e) => {
                    dispatch(setTextFilter(e.target.value))
                }}
            />
            <select
                value={filters.sortBy}
                onChange={(e) => {
                    if (e.target.value === 'date') {
                        dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        dispatch(sortByAmount());
                    }
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={filters.startDate}
                endDate={filters.endDate}
                onDatesChange={onDatesChange}
                focusedInput={focusedInput}
                onFocusChange={onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
        </div>
    )
};

export default ExpenseListFilters;
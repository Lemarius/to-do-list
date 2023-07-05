import { useState } from 'react';
import {
	StyledContainer,
	StyledDiv,
	StyledInput,
	StyledInputCont,
	StyledInputImg,
	StyledInputImgCont,
	StyledLogoCont,
	StyledLogoH1,
	StyledLogoImg,
	StyledTab,
	StyledTab2,
	StyledTabFilter,
	StyledTabH2,
	StyledTabH3
} from './styles';
import { v4 } from 'uuid';

const List = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [tasks, setTasks] = useState([
		{
			id: v4(),
			task: 'Complete online JavaScript course',
			complete: false
		},
		{
			id: v4(),
			task: 'Jog around the park 3x',
			complete: false
		},
		{
			id: v4(),
			task: '10 minutes meditation',
			complete: false
		},
		{
			id: v4(),
			task: 'Read for 1 hour',
			complete: false
		},
		{
			id: v4(),
			task: 'Pick up groceries',
			complete: false
		},
		{
			id: v4(),
			task: 'Complete Todo App on Frontend Mentor',
			complete: false
		}
	]);

	const [filter, setFilter] = useState('All');

	const filteredTasks = filterTabsByActive(filter, tasks);

	const clearCompletedTasks = () => {
		const updatedTasks = tasks.filter(task => !task.complete);
		setTasks(updatedTasks);
	};

	const [newTodoText, setNewTodoText] = useState('');

	const handleKeyDown = e => {
		if (e.keyCode === 13) {
			const newTask = {
				id: v4(),
				task: newTodoText,
				complete: false
			};
			setTasks([...tasks, newTask]);
			setNewTodoText('');
		}
	};

	return (
		<StyledContainer darkmode={darkMode}>
			<StyledDiv>
				<StyledLogoCont>
					<StyledLogoH1>TODO</StyledLogoH1>
					<StyledLogoImg
						onClick={() => toggleDarkMode(darkMode, setDarkMode)}
						src={darkMode ? './images/icon-sun.svg' : './images/icon-moon.svg'}
					/>
				</StyledLogoCont>
				<StyledInputCont darkmode={darkMode}>
					<StyledInputImgCont
						onClick={() => buttonHandle(tasks, setTasks)}
						active={tasks.complete}
					>
						<StyledInputImg src='./images/icon-check.svg' />
					</StyledInputImgCont>
					<StyledInput
						darkmode={darkMode}
						onChange={e => setNewTodoText(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder='Create a new todo...'
					/>
				</StyledInputCont>
				{filteredTasks.map(task => (
					<StyledTab darkmode={darkMode} key={task.id}>
						<StyledInputImgCont
							onClick={() => buttonHandle(tasks, setTasks, task.id)}
							active={task.complete}
						>
							<StyledInputImg src='./images/icon-check.svg' />
						</StyledInputImgCont>
						<StyledTabH2 active={task.complete} darkmode={darkMode}>
							{task.task}
						</StyledTabH2>
					</StyledTab>
				))}
				<StyledTab2 darkmode={darkMode}>
					<StyledTabH3 darkmode={darkMode}>
						{filteredTasks.filter(task => !task.complete).length} items left
					</StyledTabH3>
					<StyledTabFilter darkmode={darkMode}>
						<StyledTabH3 darkmode={darkMode} onClick={() => setFilter('All')}>
							All
						</StyledTabH3>
						<StyledTabH3
							darkmode={darkMode}
							onClick={() => setFilter('Active')}
						>
							Active
						</StyledTabH3>
						<StyledTabH3
							darkmode={darkMode}
							onClick={() => setFilter('Completed')}
						>
							Completed
						</StyledTabH3>
					</StyledTabFilter>
					<StyledTabH3 darkmode={darkMode} onClick={clearCompletedTasks}>
						Clear Completed
					</StyledTabH3>
				</StyledTab2>
			</StyledDiv>
		</StyledContainer>
	);
};

const buttonHandle = (tasks, setTasks, taskId) => {
	const newTasks = tasks.map(task => {
		if (task.id === taskId) {
			task.complete = !task.complete;
		}

		return task;
	});

	setTasks(newTasks);
};

const filterTabsByActive = (filter, tasks) => {
	let filteredTasks = [...tasks]; // Se crea una copia del array de tasks
	filteredTasks = // Se añaden los filtros a los distintos que se les asigna en los botones a los filtros, llamados 'All','Active' y 'Completed'
		filter === 'All'
			? filteredTasks // Si 'All' existe, entonces se devuelve el array original
			: filteredTasks.filter(task => {
					// Y si no, se hace un filtro
					if (filter === 'Active') {
						return !task.complete;
					} else if (filter === 'Completed') {
						return task.complete;
					}
					return task.complete;
			  });

	return filteredTasks;
};

const toggleDarkMode = (darkMode, setDarkMode) => {
	setDarkMode(!darkMode);
};

export default List;

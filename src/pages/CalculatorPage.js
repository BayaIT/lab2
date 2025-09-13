import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    calculatorAddAction, 
    calculatorSubtractAction, 
    calculatorMultiplyAction, 
    calculatorDivideAction, 
    calculatorClearAction 
} from '../redux/action';

function Calculator() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const { result, history } = useSelector(state => state.calculatorReducer);

    const handleAdd = () => {
        const value = parseFloat(inputValue);
        if (!isNaN(value)) {
            dispatch(calculatorAddAction(value));
            setInputValue('');
        }
    };

    const handleSubtract = () => {
        const value = parseFloat(inputValue);
        if (!isNaN(value)) {
            dispatch(calculatorSubtractAction(value));
            setInputValue('');
        }
    };

    const handleMultiply = () => {
        const value = parseFloat(inputValue);
        if (!isNaN(value)) {
            dispatch(calculatorMultiplyAction(value));
            setInputValue('');
        }
    };

    const handleDivide = () => {
        const value = parseFloat(inputValue);
        if (!isNaN(value)) {
            dispatch(calculatorDivideAction(value));
            setInputValue('');
        }
    };

    const handleClear = () => {
        dispatch(calculatorClearAction());
        setInputValue('');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h2>Калькулятор</h2>
            
            <div style={{ marginBottom: '20px' }}>
                <input 
                    type="number" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Введите число"
                    style={{ 
                        padding: '10px', 
                        fontSize: '16px', 
                        width: '100%',
                        marginBottom: '10px'
                    }}
                />
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <button 
                    onClick={handleAdd}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        backgroundColor: '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    + Сложение
                </button>
                
                <button 
                    onClick={handleSubtract}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        backgroundColor: '#f44336', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    - Вычитание
                </button>
                
                <button 
                    onClick={handleMultiply}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        backgroundColor: '#2196F3', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    × Умножение
                </button>
                
                <button 
                    onClick={handleDivide}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        backgroundColor: '#FF9800', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    ÷ Деление
                </button>
                
                <button 
                    onClick={handleClear}
                    style={{ 
                        padding: '10px 20px', 
                        fontSize: '16px', 
                        backgroundColor: '#9E9E9E', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%'
                    }}
                >
                    Очистить
                </button>
            </div>

            <div>
                <h3>Текущий результат: {result !== null ? result : 'Нет данных'}</h3>
                
                <h4>История вычислений:</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {history.length === 0 ? (
                        <li>Список пуст</li>
                    ) : (
                        history.map((value, index) => (
                            <li key={index} style={{ 
                                padding: '5px', 
                                backgroundColor: '#f5f5f5', 
                                margin: '5px 0',
                                borderRadius: '4px'
                            }}>
                                {value}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Calculator;

import { useFormik } from "formik";

const validate = values => {
    const errors = {};

    if(!values.name){
        errors.name = "Обов'язкове поле!";
    } else if(values.name.length < 2){
        errors.name = 'Мінимум 2 символи для заповнення!';
    }

    if(!values.email){
        errors.email = "Обов'язкове поле!";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Неправильний формат email';
    }

    return errors;
}

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        validate,
        onSubmit: values => console.log(JSON.stringify(values, null, 2))
    
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Відправити пожертвование</h2>
            <label htmlFor="name">Ваше ім'я</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
            <label htmlFor="email">Ваша пошта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="amount">Кількість</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                    
                    <option value="">Оберіть валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            <label htmlFor="text">Ваше повідомлення</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <label className="checkbox">
                <input 
                name="terms" 
                type="checkbox" 
                value={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                Погоджуєтесь з політикою конфіденціальності?
            </label>
            <button type="submit">Відправити</button>
        </form>
    )
}

export default Form;
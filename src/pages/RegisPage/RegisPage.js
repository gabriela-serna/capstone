import './RegisPage.scss';
import regisicon from '../../assets/register.svg';

const RegisPage = () => {
	
	return (
		<>
		<section className='regis'>
			<h1 className='regis__header'>Registration</h1>
			<image className="regis__image" src={regisicon} />

      <form>
    <input placeholder="Email"/>
        <input placeholder="Password"/>Password
        <input placeholder="Re-Enter Password"/>Re-Enter Password
      </form>
			<div className='regis__buttons'>
				<button className='regis__buttons-submit'>Submit</button>
			</div>

		</section>
		</>
	);
};

export default RegisPage;
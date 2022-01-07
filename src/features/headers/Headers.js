import React from 'react';
import './Headers.css';
import Search from './../../assets/icons/search.svg';
import Basket from './../../assets/icons/cart3.svg';
import Profile from './../../assets/icons/person.svg';
import ArrowDown from './../../assets/icons/chevron-down.svg';


class Headers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : 'home'
        }
    }

    selectHome = () => {
        this.setState({selected : 'home'});
    }
    selectShop = () => {
        this.setState({selected : 'shop'});
    }
    selectAbout = () =>{
        this.setState({selected : 'about_us'});
    }

    render() {
        return (
            <div className='headerComponent'>
                <div className='headerComponentMenus mob'>
                    <div className={this.state.selected === 'home'?'headerComponentMenusComp selected':'headerComponentMenusComp'} onClick={this.selectHome}>HOME</div>
                    <div className={this.state.selected === 'shop'?'headerComponentMenusComp selected':'headerComponentMenusComp'} onClick={this.selectShop}>SHOP</div>
                    <div className='headerComponentMenusComp'>
                        ANIME LOGBOOK
                        <img src={ArrowDown} alt='Arrow_Down' className='headerComponentMenusCompArrrowDownIcon' />
                    </div>
                    <div className='headerComponentMenusComp'>
                        WATCH
                        <img src={ArrowDown} alt='Arrow_Down' className='headerComponentMenusCompArrrowDownIcon' />
                    </div>
                    <div className={this.state.selected === 'about_us'?'headerComponentMenusComp selected':'headerComponentMenusComp'} onClick={this.selectAbout}>ABOUT US</div>
                </div>
                <div className='headerComponentUtilies'>
                    <div className='headerComponentUtiliesComp mob'>
                        <img src={Search} alt='Search' className='headerComponentUtiliesSearchIcon' />
                    </div>
                    <div className='headerComponentUtiliesComp'>
                        <img src={Basket} alt='Search' className='headerComponentUtiliesBasketIcon' />
                    </div>
                    <div className='headerComponentUtiliesComp mob'>
                        <img src={Profile} alt='Search' className='headerComponentUtiliesProfileIcon' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Headers;

import React from "react";
import { footerSocials, footerContacts, mainMenu, explores, payements } from '../Data'

const Footer = () => {
    return (
        <div className="section">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8">
                <div className="mr-2">
                <div className="text-xl font-semibold mb-3">Foodzone</div>
                <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate tempora similique adipisci quae iusto, vel consequatur repellat eaque tenetur nihil eum quam iure. Fuga praesentium suscipit perferendis in est distinctio.</p>
                <div className="flex items-center gap-4">
                    <span>Follow Us</span>
                    <div className="h-[2px] w-12 bg-black"></div>
                    {footerSocials.map((footerSocial, index) => {
                        return (
                            <div key={index}>
                                <a href="#">{footerSocial}</a>
                            </div>
                        )
                    })}
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        <h3 className="font-semibold text-[1.1rem] mb-4">Main Menu</h3>
                        {mainMenu.map(menu => {
                            return (
                                <div className="mb-2" key={menu.id}>
                                    <a href={`#${menu.href}`}>{menu.text}</a>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h3 className="font-semibold text-[1.1rem] mb-4">Explore</h3>
                        {explores.map((explore, index) => {
                            return (
                                <div className="mb-2" key={index}>
                                    <a href="#">{explore}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-[1.1rem] mb-4">Contact</h3>
                    {footerContacts.map(footerContact => {
                        return (
                            <div className="flex items-center gap-4 mb-4" key={footerContact.id}>
                                <div className="text-xl">
                                    {footerContact.icon}
                                </div>
                                <div className="">{footerContact.text}</div>
                            </div>
                        )
                    })}
                </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 pb-8">
                    <div>Copyright &#169; <span className="font-bold">Ye Lin Ko</span>.All rights deserved.</div>
                    <div className="flex gap-2">
                        {payements.map((payement, index) => {
                            return (
                                <div key={index}>
                                    <img src={payement} alt="" className="w-10"/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        
    )
}

export default Footer
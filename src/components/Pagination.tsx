import React, {useEffect, useState} from "react";
import "./pagination.css"

function Pagination({paginas, onChange, onChangeAmount}: {
    paginas: number,
    onChange: Function,
    onChangeAmount: Function,
}) {

    const [selectedPage, setSelectedPage] = useState(0)


    return (
        <div className="pagination-container">
                <select className="pagination-select"  style={{"width": "10%"}} name="tipo" id="tipo-select"
                        onChange={(e) => {
                            onChangeAmount(e.target.value)
                            setSelectedPage(0)
                        }}
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
            {paginas <= 5 && <div className="pagination">
                {Array.from({length: paginas}).map((pagina, index) => {
                    return (
                        <a key={index} href="#"
                           className={index == selectedPage ? "active" : ""}
                           onClick={() => {
                               setSelectedPage(index)
                               onChange(index)
                           }}
                        >{index + 1}</a>
                    )
                })}
            </div>}
            {paginas > 5 && (selectedPage < 3 ? (<div className="pagination">
                <a key={0} href="#"
                   className={0 == selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(0)
                       onChange(0)
                   }}
                >{1}</a>
                <a key={1} href="#"
                   className={1 == selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(1)
                       onChange(1)
                   }}
                >{2}</a>
                <a key={2} href="#"
                   className={2 == selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(2)
                       onChange(2)
                   }}
                >{3}</a>
                <a key={3} href="#"
                   className={3 == selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(3)
                       onChange(3)
                   }}
                >{4}</a>
                <a href="#">{"."}</a>
                <a key={paginas-1} href="#"
                   className={paginas-1 == selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(paginas-1)
                       onChange(paginas-1)
                   }}
                >{paginas}</a>
            </div>)  : selectedPage > paginas - 4 ? (<div className="pagination">
                <a key={0} href="#"
                   className={""}
                   onClick={() => {
                       setSelectedPage(0)
                       onChange(0)
                   }}
                >{1}</a>
                <a href="#">{"."}</a>
                <a key={paginas-4} href="#"
                   className={paginas-4==selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(paginas-4)
                       onChange(paginas-4)
                   }}
                >{paginas-3}</a>
                <a key={paginas-3} href="#"
                   className={paginas-3==selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(paginas-3)
                       onChange(paginas-3)
                   }}
                >{paginas-2}</a>
                <a key={paginas-2} href="#"
                   className={paginas-2==selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(paginas-2)
                       onChange(paginas-2)
                   }}
                >{paginas-1}</a>
                <a key={paginas-1} href="#"
                   className={paginas-1==selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(paginas-1)
                       onChange(paginas-1)
                   }}
                >{paginas}</a>
            </div>) : selectedPage >= 3 && selectedPage < paginas - 1 && (<div className="pagination">
                <a key={0} href="#"
                   className={0 == selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(0)
                       onChange(0)
                   }}
                >{1}</a>
                <a href="#">{"."}</a>
                <a key={selectedPage-1} href="#"
                   className={""}
                   onClick={() => {
                       setSelectedPage(selectedPage-1)
                       onChange(selectedPage-1)
                   }}
                >{selectedPage}</a>
                <a key={selectedPage} href="#"
                   className={"active"}
                   onClick={() => {
                       setSelectedPage(selectedPage)
                       onChange(selectedPage)
                   }}
                >{selectedPage+1}</a>
                <a key={selectedPage+1} href="#"
                   className={""}
                   onClick={() => {
                       setSelectedPage(selectedPage+1)
                       onChange(selectedPage+1)
                   }}
                >{selectedPage+2}</a>
                <a href="#">{"."}</a>
                <a key={paginas-1} href="#"
                   className={paginas-1==selectedPage ? "active" : ""}
                   onClick={() => {
                       setSelectedPage(paginas-1)
                       onChange(paginas-1)
                   }}
                >{paginas}</a>
            </div>))}
        </div>
    )
}

export default Pagination;
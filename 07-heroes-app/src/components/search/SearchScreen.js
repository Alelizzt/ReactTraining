import React, { useMemo } from "react";
import queryString from "query-string";

import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "./../hero/HeroCard";

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = "" } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    const handleSearch = (event) => {
        event.preventDefault();
        navigate(`?q=${searchText}`);
    };
    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h5>Search form</h5>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search a Hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {q === "" ? (
                        <div className="alert alert-info">
                            Search for a hero
                        </div>
                    ) : (
                        heroesFiltered.length === 0 && (
                            <div className="alert alert-danger">
                                {" "}
                                No results for {q}
                            </div>
                        )
                    )}

                    {heroesFiltered.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};

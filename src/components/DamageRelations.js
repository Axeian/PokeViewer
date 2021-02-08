import React from "react";
import TypeBlock from "./TypeBlock";

function DamageRelations({ typeData }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            {typeData.map((v, i) => (
              <div className="col" key={i}>
                <TypeBlock type={typeData[i].type} />
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col">
              <div className="row">
                {typeData.map((v, i) => (
                  <div className="col" key={i}>
                    <div className="font-weight-bold">Double damage to: </div>

                    {(!typeData[i].double_damage_to.length && (
                      <TypeBlock type="none" />
                    )) ||
                      typeData[i].double_damage_to.map((t) => (
                        <TypeBlock type={t} key={t} />
                      ))}
                  </div>
                ))}
              </div>

              <div className="row">
                {typeData.map((v, i) => (
                  <div className="col" key={i}>
                    <div className="font-weight-bold">Half damage from: </div>

                    {(!typeData[i].half_damage_from.length && (
                      <TypeBlock type="none" />
                    )) ||
                      typeData[i].half_damage_from.map((t) => (
                        <TypeBlock type={t} key={t} />
                      ))}
                  </div>
                ))}
              </div>

              <div className="row">
                {typeData.map((v, i) => (
                  <div className="col" key={i}>
                    <div className="font-weight-bold">No damage from: </div>
                    {(!typeData[i].no_damage_from.length && (
                      <TypeBlock type="none" />
                    )) ||
                      typeData[i].no_damage_from.map((t) => (
                        <TypeBlock type={t} key={t} />
                      ))}
                  </div>
                ))}
              </div>

              <hr className="rounded" />

              <div className="row">
                {typeData.map((v, i) => (
                  <div className="col" key={i}>
                    <div className="font-weight-bold">Double damage from: </div>

                    {(!typeData[i].double_damage_from.length && (
                      <TypeBlock type="none" />
                    )) ||
                      typeData[i].double_damage_from.map((t) => (
                        <TypeBlock type={t} key={t} />
                      ))}
                  </div>
                ))}
              </div>

              <div className="row">
                {typeData.map((v, i) => (
                  <div className="col" key={i}>
                    <div className="font-weight-bold">Half damage to: </div>

                    {(!typeData[i].half_damage_to.length && (
                      <TypeBlock type="none" />
                    )) ||
                      typeData[i].half_damage_to.map((t) => (
                        <TypeBlock type={t} key={t} />
                      ))}
                  </div>
                ))}
              </div>

              <div className="row">
                {typeData.map((v, i) => (
                  <div className="col" key={i}>
                    <div className="font-weight-bold">No damage to: </div>

                    {(!typeData[i].no_damage_to.length && (
                      <TypeBlock type="none" />
                    )) ||
                      typeData[i].no_damage_to.map((t) => (
                        <TypeBlock type={t} key={t} />
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(DamageRelations);

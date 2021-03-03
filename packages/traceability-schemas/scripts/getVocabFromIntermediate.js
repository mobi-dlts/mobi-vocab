const getVocabFromIntermediate = (intermediate) => {
  let vocabularyString = "";
  Object.values(intermediate).forEach((classDefinition) => {
    let classPropertySections = "";
    Object.values(classDefinition.classProperties).forEach((classProperty) => {
      classPropertySections += `
              <section id="${classProperty.$comment.term}">
              <h3>${classProperty.title}</h3>
              <p>${classProperty.description}</p>

              <table class="simple">
                  <tbody>
                      <tr>
                      <td>
<a href="https://json-ld.org/spec/latest/json-ld/#dfn-terms">Term</a>
                      </td>
                      <td>
          <a href="${classProperty.$comment["@id"]}">${classProperty.$comment.term}</a>
                      </td>
                      </tr>
                      <tr>
                      <td>
<a href="https://json-ld.org/spec/latest/json-ld/#dfn-iris">Full IRI</a>
                      </td>
                      <td>
          <a href="${classProperty.$comment["@id"]}">${classProperty.$comment["@id"]}</a>
                      </td>
                      </tr>
                  </tbody>
                  </table>
              </section>
              `;
    });

    let classExamples = classDefinition.examples
      ? classDefinition.examples
          .map((ex) => {
            return `
<pre class="example">
${JSON.stringify({ ...ex }, null, 2)}
</pre>
              `;
          })
          .join("\n")
      : "";

    vocabularyString += `
          <section id="${classDefinition.$comment.term}">
          <h2>${classDefinition.title}</h2>
          <p>${classDefinition.description}</p>

          <p class="note">
            See <a href="examples/${classDefinition.$comment.term}/good.json">Examples</a>
          </p>

          <table class="simple">
                  <tbody>
                      <tr>
                      <td>
          <a href="https://json-ld.org/spec/latest/json-ld/#dfn-terms">Term</a>
                      </td>
                      <td>
                          <a href="${classDefinition.$comment["@id"]}">${classDefinition.$comment.term}</a>
                      </td>
                      </tr>
                      <tr>
                      <td>
          <a href="https://json-ld.org/spec/latest/json-ld/#dfn-iris">Full IRI</a>
                      </td>
                      <td>
                          <a href="${classDefinition.$comment["@id"]}">${classDefinition.$comment["@id"]}</a>
                      </td>
                      </tr>
                      <tr>
                      <td>
          <a href="https://json-schema.org/">JSON Schema</a>
                      </td>
                      <td>
                          <a href="${classDefinition.$id}">${classDefinition.$id}</a>
                      </td>
                      </tr>
                  </tbody>
                  </table>
          ${classPropertySections}

          </section>
          `;
  });

  return `
  <section id="vocabulary" class="normative">
  <h2>Vocabulary</h2>

  <p>
    This vocabulary assumes all terms specified in the base Verifiable
    Credentials [[VC-DATA-MODEL]] context.
  </p>

  <p>
    In addition, the following classes are available for specifying
    information related to supply-chain traceability.
  </p>

  <p>
    You may view the latest json-ld vocabulary at: <br />
    <a href="https://w3id.org/traceability/v1">
      https://w3id.org/traceability/v1
    </a>
  </p>

  <p>
    You may view the latest json-schema definitions at: <br />
    <a
      href="https://github.com/w3c-ccg/traceability-vocab/tree/main/docs/schemas"
    >
      https://github.com/w3c-ccg/traceability-vocab/tree/main/docs/schemas
    </a>
  </p>
  
  
  ${vocabularyString}
  </section>`;
};

module.exports = getVocabFromIntermediate;
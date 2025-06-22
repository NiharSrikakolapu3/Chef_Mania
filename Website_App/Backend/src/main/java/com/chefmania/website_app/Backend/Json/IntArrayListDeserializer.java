package com.chefmania.website_app.Backend.Json;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ArrayNode;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class IntArrayListDeserializer extends JsonDeserializer<List<int[]>> {

    @Override
    public List<int[]> deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        JsonNode node = p.getCodec().readTree(p);

        if (!node.isArray()) {
            throw new IOException("Expected JSON array");
        }

        List<int[]> result = new ArrayList<>();
        ArrayNode arrayNode = (ArrayNode) node;

        for (JsonNode item : arrayNode) {
            int[] pair = new int[2];
            pair[0] = item.get(0).asInt();
            pair[1] = item.get(1).asInt();
            result.add(pair);
        }

        return result;
    }
}
